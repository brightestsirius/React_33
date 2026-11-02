$(`#toggleBtn`).click(function () {
  $(this).toggleClass(`active`);
});

// 2. Show / hide
$(`#hideBtn`).click(function () {
  $(`.box`).toggle();
});

// 3. Text + css
$(`.title`).text(`Hello from jQuery`).css(`color`, `green`);

// 4. Each over elements
$(`.list li`).each(function (index) {
  $(this).text(`${index + 1}. ${$(this).text()}`);
});

// 5. Each over array + append
const users = [`John`, `Anna`, `Mike`];

$.each(users, function (index, user) {
  $(`.users`).append(`<li>${user}</li>`);
});

// 6. Form: val + preventDefault
$(`#userForm`).submit(function () {
  const value = $(`#username`).val();
  if (value) $(`.usernames`).append(`<li>${value}</li>`);
  $(`#username`).val(``);
  return false; // = preventDefault + stopPropagation
});
