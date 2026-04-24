import Set "mo:core/Set";
import AdminLib "../lib/admin";

mixin (admins : Set.Set<Principal>) {
  public shared query ({ caller }) func isAdmin() : async Bool {
    AdminLib.isAdmin(admins, caller);
  };

  public shared ({ caller }) func setAdmin(newAdmin : Principal) : async Bool {
    AdminLib.setAdmin(admins, caller, newAdmin);
  };
};
