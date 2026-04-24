import Set "mo:core/Set";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

module {
  public func isAdmin(
    admins : Set.Set<Principal>,
    caller : Principal,
  ) : Bool {
    admins.contains(caller);
  };

  public func setAdmin(
    admins : Set.Set<Principal>,
    caller : Principal,
    newAdmin : Principal,
  ) : Bool {
    // First call (no admins yet) succeeds unconditionally; subsequent calls require caller to be admin
    if (admins.isEmpty()) {
      admins.add(newAdmin);
      return true;
    };
    if (not admins.contains(caller)) {
      return false;
    };
    admins.add(newAdmin);
    true;
  };

  public func requireAdmin(
    admins : Set.Set<Principal>,
    caller : Principal,
  ) {
    if (not admins.contains(caller)) {
      Runtime.trap("Unauthorized: admin access required");
    };
  };

  public func requireAuthenticated(caller : Principal) {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: authentication required");
    };
  };
};
