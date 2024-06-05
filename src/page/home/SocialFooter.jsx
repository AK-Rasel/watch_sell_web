import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

const SocialFooter = () => {
  return (
    <section className=" bg-primary_color w-full py-14">
      <div className="text-3xl flex justify-center items-center text-[#CBA9FF] gap-10">
        <SlSocialYoutube />
        <SlSocialTwitter />
        <SlSocialFacebook />
        <SlSocialInstagram />
      </div>
    </section>
  );
};

export default SocialFooter;
