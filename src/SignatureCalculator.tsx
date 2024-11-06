import React, { useMemo } from "react";
import CryptoJS from "crypto-js";

interface Props {
	hash_key: string;
	content: string;
	candidate_signature: string;
}

export default function SignatureCalculator({
	hash_key,
	content,
	candidate_signature,
}: Props) {
	const key_binary = useMemo<string>(() => hex2a(hash_key || ""), [hash_key]);
	console.log(`key_binary: ${key_binary}`);
	const real_signature = useMemo<string>(
		() => CryptoJS.HmacSHA256(content, CryptoJS.enc.Hex.parse(hash_key)).toString(),
		[key_binary, content]
	);
	return (
		<div>
			<h4>Signature: </h4>
			<p>{real_signature}</p>
			{real_signature === candidate_signature ? (
				<b style={{ color: "green" }}>Signatures Match!</b>
			) : (
				<b style={{ color: "red" }}>Signature Don't Match!</b>
			)}
		</div>
	);
}

function hex2a(key: string) {
	var str = "";
	for (var i = 0; i < key.length; i += 2)
		str += String.fromCharCode(parseInt(key.slice(i, i + 2), 16));
	return str;
}
