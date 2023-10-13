import React, { useState } from 'react'
import WordSearch from '@blex41/word-search'

function WordSearchApp() {
	const [cols, setCols] = useState(6)
	const [rows, setRows] = useState(6)
	const [words, setWords] = useState('')
	const [wordBank, setWordBank] = useState([])

	const [grid, setGrid] = useState([])

	const handleGenerate = () => {
		const dictionary = words.split(',').map((word) => word.trim())
		const options = {
			cols,
			rows,
			disabledDirections: [],
			dictionary,
			upperCase: true,
		}

		const ws = new WordSearch(options)
		const pickedWords = ws.data.words.map((word) => word.clean)
		setGrid(ws.data.grid)
		setWordBank(pickedWords)
	}

	return (
		<div className="p-4 md:p-8 bg-gray-100 min-h-screen">
			<div className="max-w-xl mx-auto">
				<section className="hideable">
					{/* Grid Size Selection */}
					<div className="flex flex-wrap -mx-2 mb-4">
						<div className="w-1/2 px-2">
							<label className="block text-gray-700 mb-2">
								Columns:
								<input
									type="number"
									value={cols}
									onChange={(e) => setCols(Number(e.target.value))}
									className="w-full mt-1 p-2 border rounded"
								/>
							</label>
						</div>
						<div className="w-1/2 px-2">
							<label className="block text-gray-700 mb-2">
								Rows:
								<input
									type="number"
									value={rows}
									onChange={(e) => setRows(Number(e.target.value))}
									className="w-full mt-1 p-2 border rounded"
								/>
							</label>
						</div>
					</div>

					{/* Word Input */}
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">
							Words (comma-separated):
							<textarea
								value={words}
								onChange={(e) => setWords(e.target.value)}
								rows={4}
								placeholder="Enter words separated by commas."
								className="w-full mt-1 p-2 border rounded"
							></textarea>
						</label>
					</div>

					{/* Generate Button */}
					<div className="mb-4">
						<button
							onClick={handleGenerate}
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						>
							Generate Grid
						</button>
					</div>
				</section>
				{/* Display Grid */}
				{grid.length > 0 && (
					<div className="printable-grid bg-white p-4 rounded shadow">
						<table className="w-full text-center">
							<tbody>
								{grid.map((row, rowIndex) => (
									<tr key={rowIndex}>
										{row.map((cell, cellIndex) => (
											<td key={cellIndex} className="border p-2">
												{cell}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{/* ... rest of your component code ... */}

				{/* Word Bank */}
				<div className="mt-6">
					<h2 className="text-xl font-semibold mb-4 text-gray-700">
						Word Bank:
					</h2>
					<div className="flex flex-wrap">
						{wordBank.map((word, index) => (
							<span
								key={index}
								className="m-1 p-2 bg-white rounded shadow text-gray-700"
							>
								{word}
							</span>
						))}
					</div>
				</div>

				{/* Print Button */}
				<div className="hideable mt-4">
					<button
						onClick={() => window.print()}
						className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
					>
						Print Grid
					</button>
				</div>
			</div>
		</div>
	)
}

export default WordSearchApp
