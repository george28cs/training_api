const STUDENT_TABLE = 'student'

module.exports = function (injectedStore) {
  let store = injectedStore
  
  async function upsert(student) {
    return store.upsert(STUDENT_TABLE, student)
  }

  async function get(start_date) {
    if (start_date) {
      const arrayDate = start_date.split(/[\s-/]+/);
      start_date = new Date(Number(arrayDate[2]), (Number(arrayDate[1]) - 1), Number(arrayDate[0]), 0, 0);
      start_date = JSON.stringify(start_date);
    }
    
    return store.get(STUDENT_TABLE, start_date)
  }

  
  function validateDate(stringDate) {
    var reGoodDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return reGoodDate.test(stringDate);
  }

  return {
    get,
    upsert,
    validateDate
  }
}