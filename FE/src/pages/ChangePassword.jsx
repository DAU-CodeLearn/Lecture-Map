import React, { useState } from "react";
import '../components/styles.css'; // CSS 파일 임포트

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
    <div className="flex flex-col items-center justify-center h-max p-5">
      <div className="w-full text-left mb-10 mt-2">
        <h1 className="text-4xl font-bold text-gray-500 custom-font">
          비밀번호 변경
          <span className="text-xl ml-2 custom-font text-gray-400">주기적인 비밀번호 변경을 통해 개인정보를 안전하게 보호하세요.</span>
        </h1>
        <hr className="border-t-2 border-gray-300 mt-6" />
      </div>
      <div className="flex items-center mb-5 mt-8">
        <p className="font-bold w-40 custom-font text-right" style={{ fontSize: "16pt", marginRight: "50px" }}>현재 비밀번호</p>
        <input
          type="password"
          className="border border-black p-2 w-80 text-left pl-4"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      
      <div className="flex items-center mb-5">
        <p className="font-bold w-40 custom-font text-right" style={{ fontSize: "16pt", marginRight: "50px" }}>새 비밀번호</p>
        <input
          type="password"
          className="border border-black p-2 w-80 text-left pl-4"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      
      <div className="flex items-center mb-4">
        <p className="font-bold w-40 custom-font text-right" style={{ fontSize: "16pt", marginRight: "50px" }}>새 비밀번호 확인</p>
        <input
          type="password"
          className="border border-black p-2 w-80 text-left pl-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <hr className="border-t-2 border-gray-300 w-full mb-14 mt-16" /> {/* 새 비밀번호 확인 밑에 선 추가 */}
      
      <p className="text-center mb-8 custom-font text-gray-400">
        *비밀번호는 최소 8자 이상이어야 합니다.<br />
        *영어 대소문자와 숫자를 포함해야 합니다.<br />
        *비밀번호를 정기적으로 변경하여 계정을 안전하게 보호하세요.
      </p>

      <button
        className="mt-12 bg-blue-500 text-white p-3 w-40 rounded custom-font"
        onClick={validate}
      >
        확인
      </button>
    </div>
  );
}
