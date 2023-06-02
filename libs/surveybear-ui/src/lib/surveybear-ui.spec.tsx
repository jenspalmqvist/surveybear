import { render } from '@testing-library/react';

import surveybearUi from './surveybear-ui';

describe('surveybearUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<surveybearUi />);
    expect(baseElement).toBeTruthy();
  });
});
