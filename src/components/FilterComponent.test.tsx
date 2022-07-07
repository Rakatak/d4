import renderer from 'react-test-renderer';
import { FilterComponent } from './FilterComponent';

describe('Test for DataTable', () => {
  it('Renders the data table component and tests the snapshot', () => {
    const component = renderer.create(
      <FilterComponent/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

