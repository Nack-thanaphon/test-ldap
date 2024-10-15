function getDepartment() {
    const departmentId = 1;
    const baseUrl = 'http://localhost:8888';
    $.ajax({
        url: `${baseUrl}/api/v1/new/department`,
        type: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'aeAU9VzoJYWkaMuieqowJVt3bI5NyEyLM2BjqPr',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.e6EhFi0q3B2HbrAMdENRP887Nr4XwRWDlapfkXrBNeY'
        },
        data: {
            organization_unit: departmentId
        },
        success: function (response) {
            console.log('departmentId:', response);
            console.log('Success:', response);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}