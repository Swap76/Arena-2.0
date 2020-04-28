import { gql } from 'apollo-boost';

export const SIGN_UP = gql`
  mutation Signup($name: String!, $username: String!, $email: String!, $password: String!) {
    signup(email: $email, username: $username, name: $name,  password: $password) {
      code
      success
      message
      userId
    }
  }  
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($userId: ID!, $otp: String!) {
    verifyUser(userId: $userId, otp: $otp) {
      code
      success
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ForgotPassword($newPassword: String! , $newRePassword: String!, $key: String!) {
    forgotPassword(newPassword: $newPassword ,newRePassword: $newRePassword ,key: $key){
      code
      success
      message
    }
  }
`;

export const UPDATE_ANNOUNCEMENT = gql`
mutation UpdateAnnouncement($code: String!, $announcement: String!) {
  updateAnnouncement(code: $code,announcement: $announcement){
    code
    success
    message
  }
}
`;

export const RESET_SUBMISSION = gql`
mutation ResetSubmission($id: String!, $status:String!) {
  resetSubmission(_id:$id, status:$status) {
    code
    success
    message
  }
}
`;

export const CREATE_BLOG = gql`
mutation CreateBlog($title: String!, $content: String!, $tags: String! ) {
  createBlog(title:$title,content:$content,tags:$tags){
    code
    success
    message
  }
}
`;

export const EDIT_BLOG = gql`
mutation EditBlog($id:ID!, $title:String!, $content:String!, $tags:String!) {
  editBlog(_id:$id, title:$title, content:$content, tags:$tags){
    code
    success
    message
  }
}
`;

export const DELETE_BLOG = gql`
mutation DeleteBlog($id: ID!){
  deleteBlog(_id:$id){
    code
    success
    message
  }
}
`;

export const CREATE_CONTEST = gql`
mutation CreateContest($code: String!,$type: ContestType!, $name: String!,$description: String!, $startsAt: String!, $endsAt:String!, $contestAdmin:[String]!, $solutionVisibility: SolutionVisibility!) {
  createContest(code: $code, type: $type, name: $name, description:$description, startsAt: $startsAt,endsAt: $endsAt,contestAdmin: $contestAdmin,solutionVisibility: $solutionVisibility){
    code
    success
    message
  }
}
`;

export const EDIT_CONTEST = gql`
mutation EditContest($oldCode: String!, $code: String!, $type: ContestType!, $name: String!, $description: String!, $startsAt: String!, $endsAt: String!, $contestAdmin:[String]!, $solutionVisibility: SolutionVisibility!) {
  editContest(oldCode: $oldCode,code: $code,type: $type,name: $name,description: $description, startsAt: $startsAt, endsAt: $endsAt, contestAdmin: $contestAdmin, solutionVisibility: $solutionVisibility){
    code
    success
    message
  }
}
`;

export const DELETE_CONTEST = gql`
mutation DeleteContest($code: String!){
  deleteContest(code: $code){
    code
    success
    message
  }
}
`;
