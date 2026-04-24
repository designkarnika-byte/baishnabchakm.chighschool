import List "mo:core/List";
import ContactTypes "../types/contact";
import Common "../types/common";

module {
  public func submitContactMessage(
    messages : List.List<ContactTypes.ContactMessage>,
    nextId : Nat,
    args : ContactTypes.CreateContactArgs,
    now : Common.Timestamp,
  ) : ContactTypes.ContactMessage {
    let msg : ContactTypes.ContactMessage = {
      id = nextId;
      name = args.name;
      email = args.email;
      message = args.message;
      createdAt = now;
    };
    messages.add(msg);
    msg;
  };

  public func getContactMessages(
    messages : List.List<ContactTypes.ContactMessage>,
  ) : [ContactTypes.ContactMessage] {
    messages.toArray();
  };
};
