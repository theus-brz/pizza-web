import React from 'react';

import LoadingIcon from '~/assets/loading.svg';

import { Spinner } from './LoadingStyles';

const Loading = () => <Spinner src={LoadingIcon} alt="Carregando" />;

export default Loading;
