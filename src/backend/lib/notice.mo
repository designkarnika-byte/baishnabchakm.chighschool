import List "mo:core/List";
import Time "mo:core/Time";
import NoticeTypes "../types/notice";
import Common "../types/common";

module {
  public func createNotice(
    notices : List.List<NoticeTypes.Notice>,
    nextId : Nat,
    args : NoticeTypes.CreateNoticeArgs,
    caller : Principal,
    now : Common.Timestamp,
  ) : NoticeTypes.Notice {
    let notice : NoticeTypes.Notice = {
      id = nextId;
      title = args.title;
      content = args.content;
      category = args.category;
      pinned = false;
      createdAt = now;
      updatedAt = now;
      authorPrincipal = caller;
    };
    notices.add(notice);
    notice;
  };

  public func updateNotice(
    notices : List.List<NoticeTypes.Notice>,
    args : NoticeTypes.UpdateNoticeArgs,
    now : Common.Timestamp,
  ) : Bool {
    var found = false;
    notices.mapInPlace(
      func(n) {
        if (n.id == args.id) {
          found := true;
          { n with title = args.title; content = args.content; category = args.category; updatedAt = now };
        } else { n };
      }
    );
    found;
  };

  public func deleteNotice(
    notices : List.List<NoticeTypes.Notice>,
    id : Common.NoticeId,
  ) : Bool {
    let sizeBefore = notices.size();
    let filtered = notices.filter(func(n) { n.id != id });
    notices.clear();
    notices.append(filtered);
    notices.size() < sizeBefore;
  };

  public func getNotices(
    notices : List.List<NoticeTypes.Notice>,
  ) : [NoticeTypes.Notice] {
    notices.toArray();
  };

  public func getNoticeById(
    notices : List.List<NoticeTypes.Notice>,
    id : Common.NoticeId,
  ) : ?NoticeTypes.Notice {
    notices.find(func(n) { n.id == id });
  };

  public func pinNotice(
    notices : List.List<NoticeTypes.Notice>,
    id : Common.NoticeId,
    pinned : Bool,
  ) : Bool {
    var found = false;
    notices.mapInPlace(
      func(n) {
        if (n.id == id) {
          found := true;
          { n with pinned };
        } else { n };
      }
    );
    found;
  };

  public func seedNotices(
    notices : List.List<NoticeTypes.Notice>,
    nextId : Nat,
    adminPrincipal : Principal,
    now : Common.Timestamp,
  ) : Nat {
    let seeds : [(Text, Text, NoticeTypes.NoticeCategory, Bool)] = [
      (
        "Annual Examination Schedule 2024 | বার্ষিক পরীক্ষার সময়সূচি ২০২৪",
        "Annual examinations for classes 9-12 will be held from 15th March to 5th April 2024. Students must bring their admit cards. | নবম থেকে দ্বাদশ শ্রেণির বার্ষিক পরীক্ষা ১৫ মার্চ থেকে ৫ এপ্রিল ২০২৪ পর্যন্ত অনুষ্ঠিত হবে। ছাত্রছাত্রীদের অবশ্যই প্রবেশপত্র আনতে হবে।",
        #Academic,
        true,
      ),
      (
        "School Holiday Notice | বিদ্যালয় ছুটির বিজ্ঞপ্তি",
        "The school will remain closed on 26th January (Republic Day) and 21st February (International Mother Language Day). Classes will resume on the next working day. | ২৬ জানুয়ারি (প্রজাতন্ত্র দিবস) এবং ২১ ফেব্রুয়ারি (আন্তর্জাতিক মাতৃভাষা দিবস) বিদ্যালয় বন্ধ থাকবে।",
        #Holiday,
        true,
      ),
      (
        "Important: Mandatory Parent-Teacher Meeting | গুরুত্বপূর্ণ: অভিভাবক-শিক্ষক সভা",
        "All parents are requested to attend the mandatory Parent-Teacher Meeting on 10th February 2024 at 11:00 AM. Attendance is compulsory for parents of class 10 and 12 students. | সকল অভিভাবকদের ১০ ফেব্রুয়ারি ২০২৪ সকাল ১১টায় অনুষ্ঠিত বাধ্যতামূলক অভিভাবক-শিক্ষক সভায় উপস্থিত থাকার অনুরোধ করা হচ্ছে।",
        #Alert,
        true,
      ),
      (
        "Academic Calendar 2024-25 | শিক্ষাবর্ষ ক্যালেন্ডার ২০২৪-২৫",
        "The academic calendar for session 2024-25 has been published. Classes will commence from 1st April 2024. The calendar includes all important dates, holidays and examination schedules. | ২০২৪-২৫ শিক্ষাবর্ষের শিক্ষা ক্যালেন্ডার প্রকাশিত হয়েছে। ১ এপ্রিল ২০২৪ থেকে ক্লাস শুরু হবে।",
        #Academic,
        false,
      ),
      (
        "Admission Open for Session 2024-25 | ২০২৪-২৫ শিক্ষাবর্ষে ভর্তি চলছে",
        "Admissions are now open for classes 9 and 11 for the academic session 2024-25. Application forms are available at the school office. Last date for submission is 31st March 2024. | ২০২৪-২৫ শিক্ষাবর্ষের নবম ও একাদশ শ্রেণিতে ভর্তি চলছে। আবেদনপত্র বিদ্যালয় অফিস থেকে পাওয়া যাচ্ছে।",
        #General,
        false,
      ),
      (
        "Annual Sports Day | বার্ষিক ক্রীড়া দিবস",
        "The Annual Sports Day will be celebrated on 28th February 2024. All students are encouraged to participate in various sports activities. Prizes will be distributed by the Chief Guest. | ২৮ ফেব্রুয়ারি ২০২৪ বার্ষিক ক্রীড়া দিবস উদযাপিত হবে। সকল ছাত্রছাত্রীদের বিভিন্ন ক্রীড়া প্রতিযোগিতায় অংশগ্রহণের আমন্ত্রণ জানানো হচ্ছে।",
        #General,
        false,
      ),
    ];
    var id = nextId;
    for ((title, content, category, pinned) in seeds.values()) {
      let notice : NoticeTypes.Notice = {
        id;
        title;
        content;
        category;
        pinned;
        createdAt = now;
        updatedAt = now;
        authorPrincipal = adminPrincipal;
      };
      notices.add(notice);
      id += 1;
    };
    id;
  };
};
