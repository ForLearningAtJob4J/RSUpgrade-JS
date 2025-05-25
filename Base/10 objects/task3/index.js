function handleObject(obj, key, action) {
  if (action === 'get') {
    return obj[key];
  }

  if (action === 'add') {
    obj[key] = '';
  } else if (action === 'delete') {
    delete obj[key];
  }

  return obj;
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }
