// src/controllers/faculty/faculty.js

import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// List page: /faculty
const facultyListPage = (req, res) => {
  const sortBy = req.query.sort || 'name';
  const facultyList = getSortedFaculty(sortBy);

  res.render('faculty/list', {
    title: 'Faculty Directory',
    faculty: facultyList,
    currentSort: sortBy
  });
};

// Detail page: /faculty/:facultyId
const facultyDetailPage = (req, res, next) => {
  const facultyId = req.params.facultyId;
  const person = getFacultyById(facultyId);

  if (!person) {
    const err = new Error(`Faculty member ${facultyId} not found`);
    err.status = 404;
    return next(err);
  }

  res.render('faculty/detail', {
    title: `${person.name} - Faculty Profile`,
    faculty: person,
    facultyId
  });
};

export { facultyListPage, facultyDetailPage };
