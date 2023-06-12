import Image from "next/image";
import Link from "next/link";

 const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
  <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
    <div className='flex flex-col ml-20 justify-start items-start gap-2'>
      <Image src='/images/logo.png' alt='logo' width={118} height={18} className='object-contain' />
      
    </div>

    <div className="flex-1 w-full flex ml-2 md:justify-end flex-wrap max-md:mt-10 gap-20">
      {footerLinks.map((item) => (
        <div key={item.title} className="footer__link">
          <h3 className="font-bold">{item.title}</h3>
          <div className="flex flex-col gap-5">
            {item.links.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-gray-500"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</footer>
);

export default Footer;
