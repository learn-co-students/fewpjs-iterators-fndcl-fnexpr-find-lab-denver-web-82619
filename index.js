function superbowlWin(record) {
  function winObj(){
    return record.find(obj => obj.result === "W")
  }
  if (winObj()) return winObj().year
}