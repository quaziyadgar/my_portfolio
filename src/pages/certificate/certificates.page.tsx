import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { PageHeaderContent } from "../../components";
import { useCertificates } from "./hooks/useCertificates";

import "./certificates.page.scss";

export const Certificates = () => {
  const { certdata } = useCertificates();
  console.log(certdata);

  return (
    <section id="certificates" className="certificates">
      <PageHeaderContent
        headerText="Certificates"
        icon={<BsInfoCircleFill size={40} />}
      />
      {certdata?.map((file: any) => (
        <div className="certificate" key={file.id}>
          <Link
            className="navbar__container__menu__item__links"
            to={`https://drive.google.com/uc?id=${file.id}`}
          >
            <h1>{file.name}</h1>
          </Link>
        </div>
      ))}
    </section>
  );
};
