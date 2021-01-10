import React from "react";

import { RouteComponentProps } from "react-router";

interface MatchParams {
  id: string;
}

interface MockPageProps extends RouteComponentProps<MatchParams> {}

const MockPage: React.FC<MockPageProps> = (props) => {
  const { match } = props;
  return (
    <div className="container">
      <div className="page-header__wrapper">
        <h1 className="page-header__text">Mock page {match.params.id}</h1>
      </div>
    </div>
  );
};

export default MockPage;
