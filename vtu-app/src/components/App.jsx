import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import OverviewTab from './components/OverviewTab';
import QuestionPapersTab from './components/QuestionPapersTab';
import SyllabusTab from './components/SyllabusTab';
import QuickLinksTab from './components/QuickLinksTab';
import StudyNotesTab from './components/StudyNotesTab';
import ScrollWidget from './components/ScrollWidget';
import './App.css';

const csData = [
  { title: 'Unit 1: Data Structures and Applications', topics: 'Introductions, primitive, arrays, strings, stacks recursion, queues, linked lists, trees, sorting and searching.', reference: ['Ellis Horowitz and Sartaj Sahni, Fundamentals of Data Structures in C', 'Seymour Lipschutz, Data Structures Schaum\'s Outlines'] },
  { title: 'Unit 2: Discrete Mathematical Structures', topics: 'Fundamentals of logics, properties of Integers, principles of counting, relations and functions, inclusion and exclusion, graph theory.', reference: 'Ralph P. Grimaldi: Discrete and Combinatorial Mathematics' },
  { title: 'Unit 3: Software Engineering', topics: 'Introduction, requirement engineering, RUP, UML, software testing, project planning, agile software development.', reference: 'Ian Sommerville: Software Engineering' },
  { title: 'Unit 4: Computer Organization', topics: 'Machine instructions and programs, input/output organization, memory, Arithmetic, and basic processing unit.', reference: 'Carl Hamacher, Zvonko Vranesic, Safwat Zaky: Computer Organization' },
  { title: 'Unit 5: Design and Analysis of Algorithms', topics: 'Introduction to algorithms, performance, divide and conquer, greedy, dynamic programming, backtracking.', reference: ['Anany Levitin, Introduction to the Design and Analysis of Algorithms', 'Ellis Horowitz, Sartaj Sahni and Rajasekaran, Computer Algorithms / C++'] },
  { title: 'Unit 6: Operating Systems', topics: 'Introduction, multi-threaded programming, Deadlocks, virtual memory management, secondary storage structures and protections.', reference: 'Abraham Silberschatz, Peter Baer Galvin, Greg Gagne: Operating System Principles' },
  { title: 'Unit 7: Computer Networks', topics: 'Introduction, Digital transmission, bandwidth utilization, Data link control, media access control, wired LAN and Ethernet.', reference: ['Behrouz A. Forouzan, Data Communications and Networking', 'James F Kurose and Keith W Ross, Computer Networking, A Top-Down Approach'] },
  { title: 'Unit 8: Object-Oriented Modeling & Design', topics: 'Use cases, System design, Class diagrams, Sequence diagrams, Design Patterns.', reference: 'Michael Blaha, James Rumbaugh: Object-Oriented Modeling and Design' },
  { title: 'Unit 9: Database Management Systems', topics: 'Relational model, Relational Algebra, SQL queries, Normalization, Concurrency control.', reference: 'Ramez Elmasri, Shamkant B. Navathe: Fundamentals of Database Systems' },
  { title: 'Unit 10: System Modeling & Simulation', topics: 'Queuing models, Random number generation, Input modeling, Verification, Validation.', reference: 'Jerry Banks, John S. Carson II, Barry L. Nelson: Discrete-Event System Simulation' },
];

const rmData = [
  { title: 'UNIT 1: Introduction & Research Problem', topics: 'Meaning, objectives, and motivation of research; Types of research; Defining research problem.', reference: 'C.R. Kothari & Gaurav Garg, Research Methodology: Methods and Techniques' },
  { title: 'UNIT 2: Literature Review & Research Design', topics: 'Theoretical & conceptual frameworks, experimental designs, literature search strategies.', reference: 'John W. Creswell, Research Design' },
  { title: 'UNIT 3: Sampling, Measurement & Data Collection', topics: 'Probability vs Non-probability sampling, sample size, measurement scales, questionnaires.', reference: 'Donald R. Cooper & Pamela S. Schindler, Business Research Methods' },
  { title: 'UNIT 4: Data Preparation & Descriptive Statistics', topics: 'Editing, coding, classification, central tendency, dispersion, skewness, kurtosis.', reference: 'Richard I. Levin & David S. Rubin, Statistics for Management' },
  { title: 'UNIT 5: Statistical Inference & Central Limit Theorem', topics: 'Parameters, sample statistics, standard error, sampling distributions, Central Limit Theorem.', reference: 'S.P. Gupta, Statistical Methods' },
  { title: 'UNIT 6: Hypothesis Testing & Chi-Square', topics: 'Null & Alternative hypotheses, Type-I and Type-II errors, z-test, t-test, Chi-Square test.', reference: 'C.R. Kothari & Gaurav Garg, Research Methodology' },
  { title: 'UNIT 7: Analysis of Variance (ANOVA)', topics: 'One-way and Two-way ANOVA, F-distribution, Latin Square Design, ANCOVA concepts.', reference: 'Douglas C. Montgomery, Design and Analysis of Experiments' },
  { title: 'UNIT 8: Regression & Factor Analysis', topics: 'Simple & Multiple linear regression, R², multicollinearity, factor analysis.', reference: 'Joseph F. Hair et al., Multivariate Data Analysis' },
  { title: 'UNIT 9: Intellectual Property Rights & Patents', topics: 'Overview of IPR, Patent eligibility criteria, filing patent applications, commercialization.', reference: 'Prabuddha Ganguli, Intellectual Property Rights' },
  { title: 'UNIT 10: Copyrights & Trademarks', topics: 'Copyright definitions, classes, Fair Use doctrine, Trademark registration process.', reference: 'V.K. Ahuja, Law Relating to Intellectual Property Rights' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [theme, setTheme] = useState('light');

  const toggleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <Header theme={theme} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content active">
          {activeTab === 'Home' && <OverviewTab />}
          {activeTab === 'Papers' && <QuestionPapersTab />}
          {activeTab === 'CS' && <SyllabusTab title="Computer Science & Information Science (50%)" prefix="cs" units={csData} />}
          {activeTab === 'RM' && <SyllabusTab title="Research Methodology (50%)" prefix="rm" units={rmData} />}
          {activeTab === 'Links' && <QuickLinksTab />}
          {activeTab === 'Notes' && <StudyNotesTab />}
        </div>
      </div>
      <ScrollWidget />
    </div>
  );
}