import Layout from "./layout";
import {useState} from "react";
import ProfileForm from "../components/form/profileForm";
import EditProfileForm from "../components/form/editProfileForm";
export default function MainPage({}){
  const [editProfile, setEditProfile] = useState(false);
  return(
    <div>
      {editProfile?
      <EditProfileForm set={setEditProfile} bool={editProfile}/>
      :
      <ProfileForm set={setEditProfile} bool={editProfile}/>
    }
    </div>
  );
}

MainPage.getLayout = function getLayout(page){
  return(
    <Layout >
      {page}
    </Layout>
  )
}