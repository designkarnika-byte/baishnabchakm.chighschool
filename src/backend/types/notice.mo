import Common "common";

module {
  public type NoticeCategory = {
    #Academic;
    #General;
    #Holiday;
    #Alert;
    #Other;
  };

  public type Notice = {
    id : Common.NoticeId;
    title : Text;
    content : Text;
    category : NoticeCategory;
    pinned : Bool;
    createdAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
    authorPrincipal : Principal;
  };

  public type CreateNoticeArgs = {
    title : Text;
    content : Text;
    category : NoticeCategory;
  };

  public type UpdateNoticeArgs = {
    id : Common.NoticeId;
    title : Text;
    content : Text;
    category : NoticeCategory;
  };
};
