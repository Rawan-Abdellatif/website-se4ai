import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./TeamMembers.module.css";

const TeamMemberLarge = ({
  name,
  role,
  imgURL,
  affiliation,
  linkedin,
  twitter,
  website,
}) => {
  return (
    <div className={clsx("col col--3 margin-bottom--lg", styles.memberLarge)}>
      <div className="card">
        <div className="card__image">
          <img
            src={imgURL || require(`../../profile_photos/${name}.jpg`).default}
            alt={name}
          />
        </div>
        <div className="card__body">
          <h3>
            {name}
            {role && (
              <>
                {" "}
                <span className="badge badge--primary">{role}</span>
              </>
            )}
          </h3>
          {affiliation}
        </div>
        <div className="card__footer">
          <ul className="pills">
            <li className="pills__item">
              <a target="_blank" href={website}>
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Know more
              </a>
            </li>
            {linkedin && (
              <li className="pills__item">
                <a
                  target="_blank"
                  href={`https://www.linkedin.com/in/${linkedin}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            )}
            {twitter && (
              <li className="pills__item">
                <a target="_blank" href={`https://twitter.com/${twitter}`}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const TeamMemberMedium = ({ name, imgURL, affiliation, twitter, website }) => {
  return (
    <div className="col col--3 margin-bottom--xl">
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          alt={name}
          src={imgURL || require(`../../profile_photos/${name}.jpg`).default}
        />
        <div className="avatar__intro">
          <h4 className="avatar__name">{name}</h4>
          <small className="avatar__subtitle">{affiliation}</small>
        </div>
        {website && (
          <a target="_blank" href={website}>
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Know more
          </a>
        )}
        {twitter && (
          <a
            className="button button--outline button--secondary "
            target="_blank"
            href={`https://twitter.com/${twitter}`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamMembers = ({ list }) => {
  return (
    <section>
      <div className="container">
        {list.map((category) => (
          <div key={category.title} className="row margin-bottom--xl">
            <h2 className="col col--12 section">{category.title}</h2>
            {category.members?.length ? (
              category.members.map((props: any) =>
                category.size == "large" ? (
                  <TeamMemberLarge key={props.name} {...props} />
                ) : (
                  <TeamMemberMedium key={props.name} {...props} />
                )
              )
            ) : (
              <div className="col col--12 margin-bottom--lg">
                {category.placeholder}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
