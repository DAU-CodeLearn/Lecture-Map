import React, { useState } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fake database password for demonstration purposes
  const fakeDatabasePassword = "currentPassword123";

  const validate = () => {
    let errorMessage = "";

    // Check if all fields are filled
    if (!currentPassword) {
      errorMessage += "현재 비밀번호를 입력해주세요.\n";
    }
    if (!newPassword) {
      errorMessage += "변경할 비밀번호를 입력해주세요.\n";
    }
    if (!confirmPassword) {
      errorMessage += "비밀번호 확인을 입력해주세요.\n";
    }

    // If there are any empty fields, show the error message and return
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    // Step 1: Check if current password matches the database password
    if (currentPassword !== fakeDatabasePassword) {
      errorMessage += "현재 비밀번호가 올바르지 않습니다.\n";
    } else {
      // Step 2: Check if new password matches confirm password
      if (newPassword !== confirmPassword) {
        errorMessage += "변경할 비밀번호와 비밀번호 확인이 일치해야 합니다.\n";
      }

      // Step 3: Check if new password meets the criteria
      if (newPassword.length < 8 || !/[A-Za-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
        errorMessage += "변경할 비밀번호는 영어와 숫자를 섞어 8글자 이상이어야 합니다.\n";
      }
    }

    if (errorMessage) {
      alert(errorMessage);
    } else {
      alert("비밀번호가 성공적으로 변경되었습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center mb-4">
        <p className="font-bold w-32">현재 비밀번호</p>
        <input
          type="password"
          className="border border-black p-2 w-48 text-left pl-4"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      
      <div className="flex items-center mb-4">
        <p className="font-bold w-32">변경할 비밀번호</p>
        <input
          type="password"
          className="border border-black p-2 w-48 text-left pl-4"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      
      <div className="flex items-center mb-4">
        <p className="font-bold w-32">비밀번호 확인</p>
        <input
          type="password"
          className="border border-black p-2 w-48 text-left pl-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={validate}
      >
        변경하기
      </button>
    </div>
  );
}
