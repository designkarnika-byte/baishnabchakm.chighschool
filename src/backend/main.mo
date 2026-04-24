import List "mo:core/List";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import NoticeTypes "types/notice";
import TeacherTypes "types/teacher";
import StudentTypes "types/student";
import ContactTypes "types/contact";
import NoticeApi "mixins/notice-api";
import TeacherApi "mixins/teacher-api";
import StudentApi "mixins/student-api";
import ContactApi "mixins/contact-api";
import AdminApi "mixins/admin-api";
import NoticeLib "lib/notice";
import TeacherLib "lib/teacher";
import StudentLib "lib/student";

actor {
  let notices = List.empty<NoticeTypes.Notice>();
  let teachers = List.empty<TeacherTypes.Teacher>();
  let students = List.empty<StudentTypes.Student>();
  let contactMessages = List.empty<ContactTypes.ContactMessage>();
  let admins = Set.empty<Principal>();

  // Seed sample data on first run (state persists via enhanced orthogonal persistence)
  var seeded = false;
  if (not seeded) {
    let now = Time.now();
    let seedPrincipal = Principal.fromText("2vxsx-fae"); // anonymous as placeholder for seed author
    ignore NoticeLib.seedNotices(notices, 0, seedPrincipal, now);
    ignore TeacherLib.seedTeachers(teachers, 0);
    ignore StudentLib.seedStudents(students, 0);
    seeded := true;
  };

  include AdminApi(admins);
  include NoticeApi(notices, admins);
  include TeacherApi(teachers, admins);
  include StudentApi(students, admins);
  include ContactApi(contactMessages, admins);
};
