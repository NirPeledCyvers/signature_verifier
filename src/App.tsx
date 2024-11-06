import React, { useState } from "react";
import "./App.css";
import SignatureCalculator from "./SignatureCalculator";

export default function App() {
	const [hash_key, set_key] = useState<string>("");
	const [content, set_content] = useState<string>("");
	const [signature, set_signature] = useState<string>("");
	return (
		<div className="App">
			<header className="App-header">
				<label htmlFor="key_input">Key (HEX)</label>
				<input
					id="key_input"
					type="text"
					size={64}
					value={hash_key}
					onChange={(e) => set_key(e.target.value)}
				/>
				<label htmlFor="content_input">Contents:</label>
				<textarea
					id="content_input"
					cols={64}
					rows={5}
					value={content}
					onChange={(e) => set_content(e.target.value)}
				/>
				<label htmlFor="signature_input">Candidate Signature:</label>
				<input
					id="signature_input"
					type="text"
					size={64}
					value={signature}
					onChange={(e) => set_signature(e.target.value)}
				/>
				<SignatureCalculator
					hash_key={hash_key}
					content={content}
					candidate_signature={signature}
				/>
			</header>
		</div>
	);
}
