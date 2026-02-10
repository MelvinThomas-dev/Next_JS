import { labrada } from "../fonts";
import {Nanum_Myeongjo} from "next/font/google";


//Dynamic Way of generating metadata for a page.
 const metadata = {
    title: "Contact Page",
    description: "This is the contact page of the application.",
    openGraph: {
        title: "Contact Page",
        description: "This is the contact page of the application.",
        images:['https://cdn.wikimg.net/en/zeldawiki/images/thumb/f/fc/EoW_Link_Render.png/800px-EoW_Link_Render.png']
    },
    // we can also specify open graph metadata, which is used by social media platforms when they index our page. This can help improve the appearance of our page when it is shared on social media.
    //we are using the metadata object to define the title and description of the contact page. 
    // This metadata will be used by search engines and social media platforms when they index our page.
};


const nanumMyeongjo = Nanum_Myeongjo({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});


export default function Contact() {
  return (
    <div>
      <h1 className={labrada.className}>Contact Page</h1>
      <p className={nanumMyeongjo.className}>This is the contact page of the application.</p>
    </div>
  );
}