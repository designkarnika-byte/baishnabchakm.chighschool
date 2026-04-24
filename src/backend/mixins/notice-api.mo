import List "mo:core/List";
import Set "mo:core/Set";
import Time "mo:core/Time";
import NoticeTypes "../types/notice";
import Common "../types/common";
import NoticeLib "../lib/notice";
import AdminLib "../lib/admin";

mixin (
  notices : List.List<NoticeTypes.Notice>,
  admins : Set.Set<Principal>,
) {
  var nextNoticeId : Nat = 0;

  public shared query func getNotices() : async [NoticeTypes.Notice] {
    NoticeLib.getNotices(notices);
  };

  public shared query func getNoticeById(id : Common.NoticeId) : async ?NoticeTypes.Notice {
    NoticeLib.getNoticeById(notices, id);
  };

  public shared ({ caller }) func createNotice(args : NoticeTypes.CreateNoticeArgs) : async NoticeTypes.Notice {
    AdminLib.requireAdmin(admins, caller);
    let now = Time.now();
    let notice = NoticeLib.createNotice(notices, nextNoticeId, args, caller, now);
    nextNoticeId += 1;
    notice;
  };

  public shared ({ caller }) func updateNotice(args : NoticeTypes.UpdateNoticeArgs) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    let now = Time.now();
    NoticeLib.updateNotice(notices, args, now);
  };

  public shared ({ caller }) func deleteNotice(id : Common.NoticeId) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    NoticeLib.deleteNotice(notices, id);
  };

  public shared ({ caller }) func pinNotice(id : Common.NoticeId, pinned : Bool) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    NoticeLib.pinNotice(notices, id, pinned);
  };
};
