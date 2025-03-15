import React from "react";

/**
 * Primary Button
 *
 */
const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}

        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
            style={{ fontWeight: 700 }}
          >
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
            style={{ fontWeight: 700 }}
          >
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

/**
 * Outline Button
 *
 */
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}

        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
            style={{ fontSize: "24px", fontWeight: 700 }}
          >
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
            style={{ fontSize: "24px", fontWeight: 700 }}
          >
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutline };
