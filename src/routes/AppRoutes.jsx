import React from "react";
import {  Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Layouts
import OrganizationLayout from "../layouts/OrganizationLayout";
import BranchLayout from "../layouts/BranchLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";

// Pages
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";

// Feature Pages
import OrganizationPage from "../features/organization/OrganizationPage";
import BranchPage from "../features/branch/BranchPage";
import TeacherPage from "../features/teacher/TeacherPage";
import StudentPage from "../features/student/StudentPage";

const AppRoutes = () => {
    const { role, isAuthenticated } = useSelector((state) => state.auth);
    
    // Protect routes based on authentication and role
    const ProtectedRoute = ({ children, allowedRoles }) => {
        if (!isAuthenticated) return <Navigate to="/login" replace />;
        if (!allowedRoles.includes(role)) return <Navigate to="/error" replace />;
        return children;
    };

    return (
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/error" element={<ErrorPage />} />

                {/* Protected Routes */}
                <Route
                    path="/organization/*"
                    element={
                        <ProtectedRoute allowedRoles={["organization"]}>
                            <OrganizationLayout>
                                <Routes>
                                    <Route index element={<DashboardPage />} />
                                    <Route path="manage" element={<OrganizationPage />} />
                                </Routes>
                            </OrganizationLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/branch/*"
                    element={
                        <ProtectedRoute allowedRoles={["branch"]}>
                            <BranchLayout>
                                <Routes>
                                    <Route index element={<DashboardPage />} />
                                    <Route path="manage" element={<BranchPage />} />
                                </Routes>
                            </BranchLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/teacher/*"
                    element={
                        <ProtectedRoute allowedRoles={["teacher"]}>
                            <TeacherLayout>
                                <Routes>
                                    <Route index element={<DashboardPage />} />
                                    <Route path="lessons" element={<TeacherPage />} />
                                </Routes>
                            </TeacherLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/*"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <StudentLayout>
                                <Routes>
                                    <Route index element={<DashboardPage />} />
                                    <Route path="classes" element={<StudentPage />} />
                                </Routes>
                            </StudentLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Fallback Route */}
                <Route path="*" element={<Navigate to="/error" />} />
            </Routes>
    );
};

export default AppRoutes;
