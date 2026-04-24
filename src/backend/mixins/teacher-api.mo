import List "mo:core/List";
import Set "mo:core/Set";
import TeacherTypes "../types/teacher";
import Common "../types/common";
import TeacherLib "../lib/teacher";
import AdminLib "../lib/admin";

mixin (
  teachers : List.List<TeacherTypes.Teacher>,
  admins : Set.Set<Principal>,
) {
  var nextTeacherId : Nat = 0;

  // Requires authentication (non-anonymous)
  public shared ({ caller }) func getTeachers() : async [TeacherTypes.Teacher] {
    AdminLib.requireAuthenticated(caller);
    TeacherLib.getTeachers(teachers);
  };

  // Requires admin
  public shared ({ caller }) func getAllTeachers() : async [TeacherTypes.Teacher] {
    AdminLib.requireAdmin(admins, caller);
    TeacherLib.getTeachers(teachers);
  };

  public shared ({ caller }) func createTeacher(args : TeacherTypes.CreateTeacherArgs) : async TeacherTypes.Teacher {
    AdminLib.requireAdmin(admins, caller);
    let teacher = TeacherLib.createTeacher(teachers, nextTeacherId, args);
    nextTeacherId += 1;
    teacher;
  };

  public shared ({ caller }) func updateTeacher(args : TeacherTypes.UpdateTeacherArgs) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    TeacherLib.updateTeacher(teachers, args);
  };

  public shared ({ caller }) func deleteTeacher(id : Common.TeacherId) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    TeacherLib.deleteTeacher(teachers, id);
  };
};
