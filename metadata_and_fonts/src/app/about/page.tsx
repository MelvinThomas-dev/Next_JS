import { labrada } from "../fonts";

//Static Way of generating metadata for a page. 
// This is the recommended way to generate metadata for a page, 
// as it provides better performance and is easier to maintain.

const metadata= {
    title: "About Page",
    description: "This is the about page of the application.",
    openGraph: {
        title: "About Page",
        description: "This is the about page of the application.",
        images:['https://cdn.wikimg.net/en/zeldawiki/images/thumb/f/fc/EoW_Link_Render.png/800px-EoW_Link_Render.png']
    },
    // we can also specify open graph metadata, which is used by social media platforms when they index our page. This can help improve the appearance of our page when it is shared on social media.
    //we are using the metadata object to define the title and description of the about page. 
    // This metadata will be used by search engines and social media platforms when they index our page.
};


export default function About() {
  return (
    <div>
      <h1 className={labrada.className}>About Page</h1>
      <p>This is the about page of the application.</p>
    </div>
  );
}