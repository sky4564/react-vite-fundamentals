import { useState } from 'react';

export default function FormHandling() {
	const [inputValue, setInputValue] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleClick() {
		alert('버튼이 클릭되었어요!');
	}

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
		console.log('폼이 제출되었어요!');
	}

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
			<h1 className="text-2xl font-bold mb-6 text-center text-blue-600">React 이벤트 핸들링</h1>

			<div className="mb-6">
				<button
					onClick={handleClick}
					className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					클릭해보세요
				</button>
			</div>

			<div className="mb-6">
				<input
					type="text"
					onChange={handleChange}
					value={inputValue}
					className="w-full p-2 border  border-gray-300 rounded bg-white text-gray-800 focus:ring-2"
					placeholder="여기에 입력하세요"
				/>
				<p className="mt-2 text-sm text-gray-600">입력된 값: {inputValue}</p>
			</div>

			<form onSubmit={handleSubmit} className="mb-6">
				<button
					type="submit"
					className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					폼 제출
				</button>
			</form>

			{submitted && (
				<div className="text-center text-green-600 font-bold">
					폼이 성공적으로 제출되었습니다!
				</div>
			)}
		</div>
	);
}