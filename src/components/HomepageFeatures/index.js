import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "What do we do?",
    Svg: require("@site/static/img/undraw_pair_programming_re_or4x.svg")
      .default,
    description: (
      <>
        Numexa offers observability solutions to companies engaged in both LLM development and LLM utilization.
      </>
    ),
  },
  {
    title: "Real-time observability",
    Svg: require("@site/static/img/undraw_detailed_examination_re_ieui.svg")
      .default,
    description: (
      <>
        A platform agnostic observability application for large language models
        with a user-friendly dashboard for visualizing logs and metrics in
        real-time.
      </>
    ),
  },
  {
    title: "Cost control & Optimisation",
    Svg: require("@site/static/img/undraw_printing_invoices_-5-r4r.svg")
      .default,
    description: (
      <>
        Numexa provides a detail cost breakdown of your AI operations. It
        intelligently generates cost-optimization recommendation to optimize
        your spending on AI operations.
      </>
    ),
  },
  {
    title: "Alerting & Notification",
    Svg: require("@site/static/img/undraw_notify_re_65on.svg").default,
    description: (
      <>
        Numexa houses a flexible alerting system that allows you to set custom
        policies & thresholds. You receive notification via email, slack &
        PagerDuty when a policy is violated.
      </>
    ),
  },
  {
    title: "PromptGuard",
    Svg: require("@site/static/img/undraw_set_preferences_kwia.svg").default,
    description: (
      <>
         Our robust security measures and vigilant approach empower you to stay one step ahead of malicious actors. Understand Geographical location. 
      </>
    ),
  },

  {
    title: "Numexa Brain",
    Svg: require("@site/static/img/undraw_set_preferences_kwia.svg").default,
    description: (
      <>
         Experience the introduction of Numexa Brain, seamlessly integrated with LangChain at the backend. 
         Utilize our observability platform to effortlessly incorporate this powerful combination, enabling you to craft advanced LLM apps with enhanced capabilities.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
