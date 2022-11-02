'use strict'

function sortAndFilter(list, showCompleted, sortBy) {
  if(list.length !== 0) {
    const filteredList = filterByComplete(list, showCompleted);
    return sortList(filteredList, sortBy);
  } else return [];
}

function filterByComplete(list, showCompleted) {
  if(showCompleted) return list;
  else {
    const filteredList = list.filter(item => !item.complete);
    if(filteredList.length !== 0) return filteredList;
    else return [];
  };
}

function sortList(list, selection) {
  switch(selection) {
    case 'added': return list;
    case 'difficulty': return sortByDifficulty(list);
    case 'task': return sortByTask(list);
    case 'assignee': return sortByAssignee(list);
    default: return list
  }
}

function sortByDifficulty(list) {
  return list.sort((previous, current) => current.difficulty - previous.difficulty);
}

function sortByTask(list) {
  return list.sort((previous, current) => {
    const previousTask = String(previous.text).toLowerCase();
    const currentTask = String(current.text).toLowerCase();
    if(previousTask < currentTask) return -1;
    if(previousTask > currentTask) return 1;
    else return 0;
  });
}

function sortByAssignee(list) {
  return list.sort((previous, current) => {
    const previousAssignee = String(previous.assignee).toLowerCase();
    const currentAssignee = String(current.assignee).toLowerCase();
    if(previousAssignee < currentAssignee) return -1;
    if(previousAssignee > currentAssignee) return 1;
    else return 0;
  });
}

export default sortAndFilter;