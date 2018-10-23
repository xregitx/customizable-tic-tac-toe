import React from 'react';
import renderer from 'react-test-renderer';

import Cell from '../components/Cell';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Cell value = 'X'/>).toJSON();
    expect(tree).toMatchSnapshot();
});
