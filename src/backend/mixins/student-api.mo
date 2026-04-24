import List "mo:core/List";
import Set "mo:core/Set";
import StudentTypes "../types/student";
import Common "../types/common";
import StudentLib "../lib/student";
import AdminLib "../lib/admin";

mixin (
  students : List.List<StudentTypes.Student>,
  admins : Set.Set<Principal>,
) {
  var nextStudentId : Nat = 0;

  // Requires authentication (non-anonymous)
  public shared ({ caller }) func getStudents() : async [StudentTypes.Student] {
    AdminLib.requireAuthenticated(caller);
    StudentLib.getStudents(students);
  };

  // Requires admin
  public shared ({ caller }) func getAllStudents() : async [StudentTypes.Student] {
    AdminLib.requireAdmin(admins, caller);
    StudentLib.getStudents(students);
  };

  public shared ({ caller }) func createStudent(args : StudentTypes.CreateStudentArgs) : async StudentTypes.Student {
    AdminLib.requireAdmin(admins, caller);
    let student = StudentLib.createStudent(students, nextStudentId, args);
    nextStudentId += 1;
    student;
  };

  public shared ({ caller }) func updateStudent(args : StudentTypes.UpdateStudentArgs) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    StudentLib.updateStudent(students, args);
  };

  public shared ({ caller }) func deleteStudent(id : Common.StudentId) : async Bool {
    AdminLib.requireAdmin(admins, caller);
    StudentLib.deleteStudent(students, id);
  };
};
