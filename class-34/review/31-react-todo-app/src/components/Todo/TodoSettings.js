import { useContext  } from 'react';
import {Button, ButtonGroup, Card, H1, Label, Slider, Switch} from "@blueprintjs/core";

import { SettingsContext } from '../../context/settings';


function TodoSettings(props) {
  const { paginationLength, setPaginationLength,
    showCompleted, setShowCompleted,
    sortBy, setSortBy} = useContext(SettingsContext) //useState(3);

  const handlePaginationChange = (val) => { 
    setPaginationLength(val);
  }
  const handleCompletedChange = (e) => { 
    setShowCompleted(e.target.checked);
  }
  const handleSortByChange = (sortByOpt) => { 
    setSortBy(sortByOpt);
  }
  return (
  <>
      <H1>Settings</H1>
      <Card>
        <Label>
          Items per page
          <Slider onChange={handlePaginationChange} value={paginationLength} min={5} max={20} labelStepSize={5} />
        </Label>
        <Label>
          Sort By
          <ButtonGroup>
            <Button
              data-testid="assignee-sort-button"
              className={sortBy === 'ASSIGNEE' ? 'bp4-active' : ''}
              onClick={() => handleSortByChange('ASSIGNEE')}>Assignee</Button>
            <Button
              className={sortBy === 'DIFFICULTY' ? 'bp4-active' : ''}
              onClick={() => handleSortByChange('DIFFICULTY')} >Difficulty</Button>
            <Button
              className={sortBy === 'ALPHA' ? 'bp4-active' : ''}
              onClick={() => handleSortByChange('ALPHA')}>Alphabetical</Button>
            <Button
              className={sortBy === 'NONE' ? 'bp4-active' : ''}
              onClick={() => handleSortByChange('NONE')}>None</Button>
          </ButtonGroup>
        </Label>
        <Switch checked={showCompleted} label="Show Completed" onChange={handleCompletedChange} />
      </Card>
  </>);
}

export default TodoSettings;
