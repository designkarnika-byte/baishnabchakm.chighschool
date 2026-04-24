import List "mo:core/List";
import Set "mo:core/Set";
import Time "mo:core/Time";
import ContactTypes "../types/contact";
import ContactLib "../lib/contact";
import AdminLib "../lib/admin";

mixin (
  contactMessages : List.List<ContactTypes.ContactMessage>,
  admins : Set.Set<Principal>,
) {
  var nextContactId : Nat = 0;

  // Public — anyone can submit
  public shared func submitContactMessage(args : ContactTypes.CreateContactArgs) : async ContactTypes.ContactMessage {
    let now = Time.now();
    let msg = ContactLib.submitContactMessage(contactMessages, nextContactId, args, now);
    nextContactId += 1;
    msg;
  };

  // Admin only
  public shared ({ caller }) func getContactMessages() : async [ContactTypes.ContactMessage] {
    AdminLib.requireAdmin(admins, caller);
    ContactLib.getContactMessages(contactMessages);
  };
};
