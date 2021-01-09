import React, { Fragment } from "react";

import { RouteComponentProps } from "react-router";

interface MatchParams {
  id: string;
}

interface MockPageProps extends RouteComponentProps<MatchParams> {}

const MockPage: React.FC<MockPageProps> = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <h1>Mock page {match.params.id}</h1>
    </Fragment>
  );
};

export default MockPage;
