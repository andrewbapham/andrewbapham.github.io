import "./component-styles/Experience.css";

type ExperienceItemProps = {
  jobTitle: string;
  companyName: string;
  companyLink: string;
  workDates: string;
  jobDescription: Array<string>;
};

export default function ExperienceItem(props: ExperienceItemProps) {
  const { jobTitle, companyName, companyLink, workDates, jobDescription } =
    props;

  return (
    <div className="experience-item">
      <h3 className="job-title">
        {jobTitle}
        <span className="company-name">
          {" "}
          @ <a href={companyLink}>{companyName}</a>
        </span>
      </h3>
      <h4 className="work-dates">{workDates}</h4>
      <ul>
        {jobDescription.map((item) => (
          <li>
            <span className="list-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
