export enum Privileges {
  // Dashboard
  ViewDashboard = 'viewdashboard',

  // Assignments
  ViewAssignments = 'viewassignments',
  CreateAssignments = 'createassignments',
  ManageAssignments = 'manageassignments',

  // Courses
  ViewCourses = 'viewcourses',
  CreateCourses = 'createcourses',
  ManageCourses = 'managecourses',

  // Questions
  ViewQuestions = 'viewquestions',
  CreateQuestions = 'createquestions',
  ManageQuestions = 'managequestions',

  // Users and Roles
  ViewUsers = 'viewusers',
  ManageUsers = 'manageusers',
  ManageRoles = 'manageroles',
  ManagePermissions = 'managepermissions',

  // Premium Content
  AccessPremiumContent = 'accesspremiumcontent',

  // Library & Resources
  ViewLibrary = 'viewlibrary',
  ManageLibrary = 'managelibrary',

  // Certifications
  IssueCertificates = 'issuecertificates',
  ViewCertificates = 'viewcertificates',
}
