import Common "common";

module {
  public type ContactMessage = {
    id : Common.ContactId;
    name : Text;
    email : Text;
    message : Text;
    createdAt : Common.Timestamp;
  };

  public type CreateContactArgs = {
    name : Text;
    email : Text;
    message : Text;
  };
};
