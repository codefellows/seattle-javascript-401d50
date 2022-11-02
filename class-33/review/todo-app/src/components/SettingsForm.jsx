import { useContext } from 'react';
import { SettingsContext } from '../context/settings';
import { FormGroup, Label, NumericInput, Switch, Button } from '@blueprintjs/core'

function SettingsForm({ setShowForm }) {
  const context = useContext(SettingsContext);

  function handleNumberChange(e) {
    context.setNumberOfItems(e);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: e,
      showCompleted: context.showCompleted,
      sortBy: context.sortBy
    }));
  }

  function handleSwitchChange(e) {
    context.setShowCompleted(e.target.checked);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: context.numberOfItems,
      showCompleted: e.target.checked,
      sortBy: context.sortBy
    }));
  }

  function handleSelectChange(e) {
    context.setSortBy(e.target.value);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: context.numberOfItems,
      showCompleted: context.showCompleted,
      sortBy: e.target.value
    }));
  }

  return (
    <form id='settingsForm'>
      <FormGroup>
        <Label>
          Number of Items Per Page
          <NumericInput
            value={context.numberOfItems}
            onValueChange={handleNumberChange}
            min={1}
            max={20}
          />
        </Label>
        <Switch
          checked={context.showCompleted}
          label='Show Completed'
          onChange={handleSwitchChange}
          data-testid="show-completed"
        />

        <Label> Sort By:
          <div className="bp4-html-select">
            <select defaultValue={context.sortBy} onChange={handleSelectChange}>
              <option value='added' role='sort'>Added</option>
              <option value='difficulty' role='sort'>Difficulty</option>
              <option value='task' role='sort'>Task</option>
              <option value='assignee' role='sort'>Assignee</option>
            </select>
            <span className="bp4-icon bp4-icon-double-caret-vertical"></span>
          </div>
        </Label>

      </FormGroup>
      <Button onClick={() => setShowForm(false)}>Close</Button>
    </form >
  )
}

export default SettingsForm
