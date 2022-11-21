
import {Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from '@chakra-ui/react';
import {useRef, useState} from 'react';
type ModalProps = {
	player: string;
	avatar: string;
};
function ModalGame({avatar, player}: ModalProps) {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const [result, setResult] = useState(false);
	const [attempts, setAttempts] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState('');

	const initialRef = useRef(null);
	const finalRef = useRef(null);
	function handleCheckCorrectAnswer(inputValue: string): void {
		setInputValue(inputValue);
		if (inputValue.toLowerCase() === player.toLowerCase()) {
			setResult(true);
		}

		if (inputValue.toLowerCase() !== player.toLowerCase()) {
			setResult(false);
		}
	}

	return (
		<>
			<img src={avatar} onClick={onOpen} ></img>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{result ? player : '*'.repeat(player.length)}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>First name</FormLabel>
							<Input ref={initialRef} placeholder='First name' onChange={e => {
								handleCheckCorrectAnswer(e.target.value);
							}}/>
						</FormControl>
						<h1>Tentativas</h1>
						<div>{attempts.map(att => (
							<p key={att}>{att}</p>
						))}</div>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='green' mr={3} onClick={() => {
							setAttempts(prevState => [...prevState, inputValue]);
						}}>
              Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalGame;
