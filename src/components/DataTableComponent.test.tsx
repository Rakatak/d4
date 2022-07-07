import { DataTableComponent } from './DataTableComponent';
import renderer from 'react-test-renderer';

describe('Test for DataTable', () => {
  it('Renders the data table component and tests the snapshot', () => {
    const component = renderer.create(
      <DataTableComponent/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

