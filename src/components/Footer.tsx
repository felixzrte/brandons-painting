import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import logo from '/bplogo.png';

const Footer = () => {
  return (
    <footer className=" bg-white py-12">
      <div className="px-4 py-24 md:px-8 lg:px-16 xl:px-32">
        <div className="container flex w-full flex-col gap-14">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <a href="/" className="mb-10">
              <img src={logo} alt="logo" className="w-28 lg:w-32" />
            </a>

            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="flex flex-col gap-4 text-gray-600">
                    {columns.links.map((link) => (
                      <a href={link.href} key={link.key}>
                        {link.label}
                      </a>
                    ))}
                  </ul>
                </FooterColumn>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <a href="/" key={link.label} className="gap-4">
                      <p className=" text-gray-600">{link.label}:</p>
                      <p className=" text-blue-600">{link.value}</p>
                    </a>
                  ))}
                </FooterColumn>
              </div>

              {/* <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 text-gray-600">
                  {SOCIALS.links.map((link) => (
                    <a href="/" key={link}>
                      <img src={link} alt="logo" width={24} height={24} />
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div> */}
            </div>
          </div>

          <div className="border" />
          <p className="w-full text-center text-gray-400">
            2023 Brandon's Painting & Rennovations LLC | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-primary whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
