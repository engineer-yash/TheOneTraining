$(document).ready(function () {
  //! Variables for validation
  var isNameValid = false;
  var isEmailValid = false;
  var isPhoneValid = false;
  var isGenderValid = false;
  var isEnquiryValid = false;
  var isMessageValid = false;
  var totalPages;
  var limit = 10;
  var page = 1;
  //! Global Functions
  pageNum(limit, page);
  loadEnquiries(limit, page);
  searchEnquiries();
  function loadEnquiries(limit, page) {
    $.ajax({
      url: "https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users",
      type: "GET",
      data: {
        limit: limit,
        page: page,
      },
      beforeSend: function () {
        $("#loader").addClass("loader");
        setTimeout(function() {
          $("#loader").removeClass("loader");
        }, 900);
      },
      success: function (data) {
        displayEnquiries(data);
        summary();
      },
    });
  }
  //! Summary Function
  function summary() {
    $.ajax({
      url: "https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users",
      type: "GET",
      success: function (data) {
        $("#totalEnquiries").text(data.length);
        $("#enquiries").text(
          data.filter((enquiry) => enquiry.enquiry !== "General").length
        );
        $("#totalMaleEnquiries").text(
          data.filter((enquiry) => enquiry.gender === "Male").length
        );
        $("#totalFemaleEnquiries").text(
          data.filter((enquiry) => enquiry.gender === "Female").length
        );
      },
    });
  }
  //! Display Enquiries Function
  function displayEnquiries(enquiries) {
    // Clear existing data
    $("#enquiryTableBody").empty();
    // Loop through enquiries and add rows to the table
    $.each(enquiries, function (index, enquiry) {
      $("#enquiryTableBody").append(`<tr>
            <td>${enquiry.id}</td>
            <td>${enquiry.name}</td>
            <td>${enquiry.email}</td>
            <td>${enquiry.phone}</td>
            <td>${enquiry.gender}</td>
            <td>${enquiry.enquiry}</td>
            <td>${enquiry.message}</td>
            <td>
            <div class="btn-group">
                <button class="btn btn-sm btn-danger mr-3" id="deleteEnquiry"><i class="fa-solid fa-trash"></i></button>
                <button class="btn btn-sm btn-primary editBtn" data-id="${enquiry.id}"><i class="fa-solid fa-pencil"></i></button>
            </div>
            </td>
        </tr>`);
    });
  }
  //! Page Size by enter click event

  $("#pageSize").on("keyup", function () {
    setTimeout(() => {
      var limit = $(this).val();
      var searchValue = $("#search").val();
      if (limit === "") {
        loadEnquiries(10, page, searchValue);
        pageNum(10, page, searchValue);
      } else {
        if (limit > 100) {
          Swal.fire({
            title: "Error",
            text: "Limit cannot exceed 100",
            icon: "error",
          });
        } else {
          loadEnquiries(limit, page, searchValue);
          pageNum(limit, page, searchValue);
        }
      }
    }, 1000);
  });
  //! Pagination Function
  function pageNum(limit, page) {
    document.getElementById("paginationList").innerHTML = "";
    let totalRecords = 0;
    $.ajax({
      url: "https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users",
      type: "GET",
      success: function (data) {
        totalRecords = data.length;
        if (totalRecords >= 10) {
          totalPages = Math.ceil(totalRecords / limit);
          let li = "";
          li += `<li class="page-item" id="prev"><a class="page-link">Previous</a></li>`;
          if (page === 1) {
            li += `<li class="page-item disabled"><a class="page-link"><i class="fa-solid fa-backward-fast"></i></a></li>`;
          } else {
            li += `<li class="page-item" id="first"><a class="page-link"><i class="fa-solid fa-backward-fast"></i></a></li>`;
          }

          let startPage = page - 2;
          let endPage = page + 2;

          if (startPage <= 0) {
            startPage = 1;
            endPage = 5;
          }

          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - 4;
          }

          if (startPage > 1) {
            li += `<li class="page-item" id="left"><a class="page-link">...</a></li>`;
          }

          for (let i = startPage; i <= endPage; i++) {
            if (i === page) {
              li += `<li class="page-item list active" id='${i}'><a class="page-link">${i}</a></li>`;
            } else {
              li += `<li class="page-item list" id='${i}'><a class="page-link">${i}</a></li>`;
            }
          }

          if (endPage < totalPages) {
            li += `<li class="page-item" id="right"><a class="page-link">...</a></li>`;
          }

          if (page === totalPages) {
            li += `<li class="page-item disabled"><a class="page-link"><i class="fa-solid fa-forward-fast"></i></a></li>`;
          } else {
            li += `<li class="page-item" id="last"><a class="page-link"><i class="fa-solid fa-forward-fast"></i></a></li>`;
          }

          li += `<li class="page-item" id="next"><a class="page-link">Next</a></li>`;
          $("#paginationList").html(li);

          //* listner for left and right for pagination
          $("#left").on("click", function () {
            page = startPage - 1;
            loadEnquiries(limit, page);
            pageNum(limit, page);
            searchEnquiries(); // Add this line to include search functionality
          });

          $("#right").on("click", function () {
            page = endPage + 1;
            loadEnquiries(limit, page);
            pageNum(limit, page);
            searchEnquiries(); // Add this line to include search functionality
          });

          //* Listener for previous button
          $("#prev").on("click", function () {
            if (page > 1) {
              page--;
              loadEnquiries(limit, page);
              pageNum(limit, page);
              searchEnquiries(); // Add this line to include search functionality
            }
          });

          //* Listener for first page button
          $("#first").on("click", function () {
            page = 1;
            loadEnquiries(limit, page);
            pageNum(limit, page);
            searchEnquiries(); // Add this line to include search functionality
          });

          //* Listener for pagination
          $(".list").on("click", function () {
            page = $(this).attr("id");
            loadEnquiries(limit, page);
            pageNum(limit, page);
            searchEnquiries(); // Add this line to include search functionality
          });

          //* adding active class to the current page by removing active class from all other pages by id='${i}'
          $(".list").removeClass("active");
          $(`#${page}`).addClass("active");

          //* Listener for next button
          $("#next").on("click", function () {
            if (page < totalPages) {
              page++;
              loadEnquiries(limit, page);
              pageNum(limit, page);
              searchEnquiries(); // Add this line to include search functionality
            }
          });

          //* Listener for last page button
          $("#last").on("click", function () {
            page = totalPages;
            loadEnquiries(limit, page);
            pageNum(limit, page);
            searchEnquiries(); // Add this line to include search functionality
          });
        } else {
          $("#paginationList").html("");
        }
      },
    });
  }
  //! Search Functionality
  function searchEnquiries() {
    let timeoutId;
    $("#search").on("keyup", function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        var pageSize = $("#pageSize").val() || 10;
        var searchValue = $(this).val();
        if (searchValue === "") {
          loadEnquiries(pageSize, page);
          pageNum(pageSize, page);
        } else {
          const url = new URL(
            "https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users"
          );
          url.searchParams.append("search", searchValue); // Add the search query to the URL
          url.searchParams.append("limit", pageSize); // Add the limit parameter to the URL
          url.searchParams.append("page", page); // Add the page parameter to the URL
          fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              throw new Error("Failed to fetch data");
            })
            .then((data) => {
              displayEnquiries(data); // Display the searched data in the table
              // Pagination for searched data
              if (data.length >= pageSize) {
                pageNum(pageSize, page);
              } else {
                $("#paginationList").html("");
              }
            })
            .catch((error) => {
              Swal.fire({
                title: "Error",
                text: "Enquiry not found",
                icon: "error",
              });
            });
        }
      }, 500);
    });
  }
  //! Add Enquiry button click event
  $("#addEnquiryBtn").click(function () {
    $("#addEnquiryModal").modal("show");
    var $name = $("#name");
    var $email = $("#email");
    var $phone = $("#phone");
    var $gender = $("#gender");
    var $enquiry = $("#enquiry");
    var $message = $("#message");
    $name.on("click input", validateName);
    $email.on("click input", validateEmail);
    $phone.on("click input", validatePhone);
    $gender.on("click input", validateGender);
    $enquiry.on("click input", validateEnquiry);
    $message.on("click input", validateMessage);
    function validateName(name) {
      var name = $name.val();
      var nameRegex = /^[a-zA-Z\s]+$/;
      if (name === "") {
        $("#nameError").text("Name is required *");
        setRedBorder($name);
        isNameValid = false;
      } else if (!nameRegex.test(name)) {
        $("#nameError").text("Name should contain only alphabets");
        setRedBorder($name);
        isNameValid = false;
      } else if (name.length < 5 || name.length > 15) {
        $("#nameError").text("Name should be between 5 and 15 characters");
        setRedBorder($name);
        isNameValid = false;
      } else {
        $("#nameError").text("");
        setGreenBorder($name);
        isNameValid = true;
      }
    }
    function validateEmail() {
      var email = $email.val();
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (email === "") {
        $("#emailError").text("Email is required *");
        setRedBorder($email);
        isEmailValid = false;
      } else if (!emailRegex.test(email)) {
        $("#emailError").text("Invalid email");
        setRedBorder($email);
        isEmailValid = false;
      } else {
        $("#emailError").text("");
        setGreenBorder($email);
        isEmailValid = true;
      }
    }
    function validatePhone() {
      var phone = $phone.val();
      var phoneRegex = /^[0-9]{10}$/;
      if (phone === "") {
        $("#phoneError").text("Phone is required *");
        setRedBorder($phone);
        isPhoneValid = false;
      } else if (!phoneRegex.test(phone)) {
        $("#phoneError").text("Invalid phone number");
        setRedBorder($phone);
        isPhoneValid = false;
      } else {
        $("#phoneError").text("");
        setGreenBorder($phone);
        isPhoneValid = true;
      }
    }
    function validateGender() {
      var gender = $gender.val();
      if (gender === "") {
        $("#genderError").text("Gender is Required *");
        setRedBorder($gender);
        isGenderValid = false;
      } else {
        $("#genderError").text("");
        setGreenBorder($gender);
        isGenderValid = true;
      }
    }
    function validateEnquiry() {
      var enquiry = $enquiry.val();
      if (enquiry === "") {
        $("#enquiryError").text("Enquiry is Required *");
        setRedBorder($enquiry);
        isEnquiryValid = false;
      } else {
        $("#enquiryError").text("");
        setGreenBorder($enquiry);
        isEnquiryValid = true;
      }
    }
    function validateMessage() {
      var message = $message.val();
      if (message === "") {
        $("#messageError").text("Message is Required *");
        setRedBorder($message);
        isMessageValid = false;
      } else {
        $("#messageError").text("");
        setGreenBorder($message);
        isMessageValid = true;
      }
    }
    //! Red Color Border
    function setRedBorder($element) {
      $element.css({
        "border-color": "#FF0000",
        "box-shadow":
          "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)",
      });
    }
    //! Green Color Border
    function setGreenBorder($element) {
      $element.css({
        "border-color": "#00FF00",
        "box-shadow":
          "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 255, 0, 0.6)",
      });
    }
  });
  //! Add Enquiry form submit event
  $("#addEnquiryForm").submit(function (e) {
    e.preventDefault();
    if (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isGenderValid &&
      isEnquiryValid &&
      isMessageValid
    ) {
      $.ajax({
        url: "https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users",
        type: "POST",
        data: $(this).serialize(),
        success: function () {
          $("#addEnquiryModal").modal("hide");
          loadEnquiries(limit, page);
          $("#addEnquiryForm")[0].reset(); // Clear the form
          //clear the css border color and box shadow
          $("#name").css({ "border-color": "", "box-shadow": "" });
          $("#email").css({ "border-color": "", "box-shadow": "" });
          $("#phone").css({ "border-color": "", "box-shadow": "" });
          $("#gender").css({ "border-color": "", "box-shadow": "" });
          $("#enquiry").css({ "border-color": "", "box-shadow": "" });
          $("#message").css({ "border-color": "", "box-shadow": "" });

          Swal.fire({
            title: "Success",
            text: "Enquiry added successfully",
            icon: "success",
          });
        },
      });
      isNameValid = false;
      isEmailValid = false;
      isPhoneValid = false;
      isGenderValid = false;
      isEnquiryValid = false;
      isMessageValid = false;
    } else {
      validateName();
      validateEmail();
      validatePhone();
      validateGender();
      validateEnquiry();
      validateMessage();
    }
  });
 
  //! Delete Enquiry Function
  function deleteEnquiry(id) {
    // Show confirmation dialog using SweetAlert
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this enquiry?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked on "Yes, delete it"
        $.ajax({
          url: `https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users/${id}`,
          type: "DELETE",
          success: function () {
            loadEnquiries(limit, page);
            pageNum(limit, page);
            Swal.fire({
              title: "Success",
              text: "Enquiry deleted successfully",
              icon: "success",
            });
          },
        });
      }
    });
  }
  //! Event listener for deleteEnquiry
  $("#enquiryTableBody").on("click", ".btn-danger", function () {
    var id = $(this).closest("tr").find("td:first").text();
    deleteEnquiry(id);
  });

  //! Edit button click event using event delegation
  $("#enquiryTableBody").on("click", ".editBtn", function () {
    var id = $(this).data("id");
    editEnquiry(id);
    validateEditPhone();
  });

  //! Edit Enquiry Function
  // Variables for validation
  var isEditNameValid = false;
  var isEditEmailValid = false;
  var isEditPhoneValid = false;
  var isEditGenderValid = false;
  var isEditEnquiryValid = false;
  var isEditMessageValid = false;

  // Event listeners for input validation
  $("#editName").on("input", validateEditName);
  $("#editEmail").on("input", validateEditEmail);
  $("#editPhone").on("input", validateEditPhone);
  $("#editGender").on("input", validateEditGender);
  $("#editEnquiry").on("input", validateEditEnquiry);
  $("#editMessage").on("input", validateEditMessage);

// Validation functions
function validateEditName() {
  var name = $("#editName").val();
  var nameRegex = /^[a-zA-Z\s]+$/;
  if (name === "") {
    $("#editNameError").text("Name is required *");
    setRedBorder($("#editName"));
    isEditNameValid = false;
  } else if (!nameRegex.test(name)) {
    $("#editNameError").text("Name should contain only alphabets");
    setRedBorder($("#editName"));
    isEditNameValid = false;
  } else if (name.length < 5 || name.length > 15) {
    $("#editNameError").text("Name should be between 5 and 15 characters");
    setRedBorder($("#editName"));
    isEditNameValid = false;
  } else {
    $("#editNameError").text("");
    setGreenBorder($("#editName"));
    isEditNameValid = true;
  }
}

function validateEditEmail() {
  var email = $("#editEmail").val();
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email === "") {
    $("#editEmailError").text("Email is required *");
    setRedBorder($("#editEmail"));
    isEditEmailValid = false;
  } else if (!emailRegex.test(email)) {
    $("#editEmailError").text("Invalid email");
    setRedBorder($("#editEmail"));
    isEditEmailValid = false;
  } else {
    $("#editEmailError").text("");
    setGreenBorder($("#editEmail"));
    isEditEmailValid = true;
  }
}

function validateEditPhone() {
  var phone = $("#editPhone").val();
  var phoneRegex = /^[0-9]{10}$/;
  if (phone === "") {
    $("#editPhoneError").text("Phone is required *");
    setRedBorder($("#editPhone"));
    isEditPhoneValid = false;
  } else if (!phoneRegex.test(phone)) {
    $("#editPhoneError").text("Invalid phone number");
    setRedBorder($("#editPhone"));
    isEditPhoneValid = false;
  } else {
    $("#editPhoneError").text("");
    setGreenBorder($("#editPhone"));
    isEditPhoneValid = true;
  }
  // Show error immediately if available value is not matching
  if (!isEditPhoneValid) {
    $("#editPhoneError").text("Phone number does not match the required format");
    setRedBorder($("#editPhone"));
  }
}

function validateEditGender() {
  var gender = $("#editGender").val();
  if (gender === "") {
    $("#editGenderError").text("Gender is Required *");
    setRedBorder($("#editGender"));
    isEditGenderValid = false;
  } else {
    $("#editGenderError").text("");
    setGreenBorder($("#editGender"));
    isEditGenderValid = true;
  }
}

function validateEditEnquiry() {
  var enquiry = $("#editEnquiry").val();
  if (enquiry === "") {
    $("#editEnquiryError").text("Enquiry is Required *");
    setRedBorder($("#editEnquiry"));
    isEditEnquiryValid = false;
  } else {
    $("#editEnquiryError").text("");
    setGreenBorder($("#editEnquiry"));
    isEditEnquiryValid = true;
  }
}

function validateEditMessage() {
  var message = $("#editMessage").val();
  if (message === "") {
    $("#editMessageError").text("Message is Required *");
    setRedBorder($("#editMessage"));
    isEditMessageValid = false;
  } else {
    $("#editMessageError").text("");
    setGreenBorder($("#editMessage"));
    isEditMessageValid = true;
  }
}

// Form submit event
$("#editEnquiryForm").submit(function (e) {
  e.preventDefault();
  if (
    isEditNameValid &&
    isEditEmailValid &&
    isEditPhoneValid &&
    isEditGenderValid &&
    isEditEnquiryValid &&
    isEditMessageValid
  ) {
    // Form submission logic
  } else {
    validateEditName();
    validateEditEmail();
    validateEditPhone();
    validateEditGender();
    validateEditEnquiry();
    validateEditMessage();
  }
});

// Helper function to set red border
function setRedBorder($element) {
  $element.css({
    "border-color": "#FF0000",
    "box-shadow":
      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)",
  });
}

// Helper function to set green border
function setGreenBorder($element) {
  $element.css({
    "border-color": "#00FF00",
    "box-shadow":
      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 255, 0, 0.6)",
  });
}

  function editEnquiry(id) {
    $.ajax({
      url: `https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users/${id}`,
      type: "GET",
      success: function (enquiry) {
        $('#editEnquiryForm input[name="id"]').val(enquiry.id);
        $('#editEnquiryForm input[name="name"]').val(enquiry.name);
        $('#editEnquiryForm input[name="email"]').val(enquiry.email);
        $('#editEnquiryForm input[name="phone"]').val(enquiry.phone);
        var genderInput = $('#editEnquiryForm select[name="gender"]');
        var genderValue = enquiry.gender;
        if (!genderInput.find(`option[value="${genderValue}"]`).length) {
          genderInput.append(
            `<option value="${genderValue}">${genderValue}</option>`
          );
        }
        genderInput.val(genderValue);
        var enquiryInput = $('#editEnquiryForm select[name="enquiry"]');
        var enquiryValue = enquiry.enquiry;
        if (!enquiryInput.find(`option[value="${enquiryValue}"]`).length) {
          enquiryInput.append(
            `<option value="${enquiryValue}">${enquiryValue}</option>`
          );
        }
        enquiryInput.val(enquiryValue);
        // $('#editEnquiryForm select[name="enquiry"]').val(enquiry.enquiry);
        $('#editEnquiryForm textarea[name="message"]').val(enquiry.message);
        $("#editEnquiryModal").modal("show");
      },
    });
  }
  //! Edit Enquiry form submit event
  $("#editEnquiryForm").submit(function (e) {
    e.preventDefault();
    var id = $('#editEnquiryForm input[name="id"]').val();
    $.ajax({
      url: `https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users/${id}`,
      type: "PUT",
      data: $("#editEnquiryForm").serialize(),
      success: function () {
        $("#editEnquiryModal").modal("hide");
        loadEnquiries(limit, page);
        Swal.fire({
          title: "Success",
          text: "Enquiry updated successfully",
          icon: "success",
        });
      },
    });
  });
  //! Sorting Functionality
  //! when click on thead it will sort table by name not by id
  function fetchSortData(sortBy, sortOrder) {
    var pageSize = $("#pageSize").val();
    var url = `https://65e4311d3070132b3b2459c1.mockapi.io/tablehub/users?sortBy=${sortBy}&order=${sortOrder}`;
    if (pageSize) {
      url += `&limit=${pageSize}`;
    } else {
      url += `&limit=${limit}`;
    }
    url += `&page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayEnquiries(data);
        pageNum(limit, page);
      });
  }
  $("#nameHead").on("click", function () {
    var sortOrder = $(this).data("sort-order");
    if (sortOrder === "asc") {
      fetchSortData("name", "desc");
      $(this).data("sort-order", "desc");
    } else {
      fetchSortData("name", "asc");
      $(this).data("sort-order", "asc");
    }
  });

  $("#emailHead").on("click", function () {
    var sortOrder = $(this).data("sort-order");
    if (sortOrder === "asc") {
      fetchSortData("email", "desc");
      $(this).data("sort-order", "desc");
    } else {
      fetchSortData("email", "asc");
      $(this).data("sort-order", "asc");
    }
  });

  $("#phoneHead").on("click", function () {
    var sortOrder = $(this).data("sort-order");
    if (sortOrder === 'asc') {
      fetchSortData("phone", "desc");
      $(this).data("sort-order", "desc")
    } else {
      fetchSortData("phone", "asc");
      $(this).data("sort-order", "asc");
    }
  });

  $("#genderHead").on("click", function () {
    var sortOrder = $(this).data("sort-order");
    if (sortOrder === 'asc') {
      fetchSortData("gender", "desc");
      $(this).data("sort-order", "desc")
    }
    else {
      fetchSortData("gender", "asc");
      $(this).data("sort-order", "asc");
    }
  });

  $("#enquiryHead").on("click", function () {
    var sortOrder = $(this).data("sort-order");
    if (sortOrder === 'asc') {
      fetchSortData("enquiry", "desc");
      $(this).data("sort-order", "desc")
    }
    else {
      fetchSortData("enquiry", "asc");
      $(this).data("sort-order", "asc");
    }
  });

  $("#messageHead").on("click", function () {
    var sortOrder = $(this).data("sort-order");
    if (sortOrder === 'asc') {
      fetchSortData("message", "desc");
      $(this).data("sort-order", "desc")
    }
    else {
      fetchSortData("message", "asc");
      $(this).data("sort-order", "asc");
    }
  });
});
