import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import SubmitForm from "../submit-form";

//Test case for pssing in text fields for Submit form
test("Text input <Submit-form/>, must succeed", () => {
          const { getByLabelText } = render(<SubmitForm />);

          const inputTitle = screen.getByLabelText("Title");
          const inputAuthor = screen.getByLabelText("Author/s");
          const inputSource = screen.getByLabelText("Source");
          const inputDOI = screen.getByLabelText("DOI");

          expect(inputTitle).toBeInTheDocument();
          expect(inputAuthor).toBeInTheDocument();
          expect(inputSource).toBeInTheDocument();
          expect(inputDOI).toBeInTheDocument();
});

test("Text input <submit-form/>, must fail", () => {
          const { getByLabelText } = render(<SubmitForm />);
          const inputPY = screen.getByLabelText("Publish Year");
          const inputclaim = getByLabelText("Claim");
          const inputEL = getByLabelText("EvidenceLevel");

          expect(inputPY ).toBeInTheDocument();
          expect(inputclaim).toBeInTheDocument();
          expect(inputEL).toBeInTheDocument();
});

test("should allow the user to submit their article <submit-form>,  must succeed", () =>{
          const { getByLabelText , getAllByTestId, getByText} = render(<SubmitForm />);
          const inputTitle = screen.getByLabelText("Title");
          const inputAuthor = screen.getByLabelText("Author/s");
          const inputSource = screen.getByLabelText("Source");
          const inputPY = screen.getAllByTestId("Publish Year");
          const inputDOI = screen.getByLabelText("DOI");
          const inputclaim = screen.getByTestId('Claim');
          const inputEL = screen.getByTestId('Evidence Level');
          const submitButton = screen.getByTestId("Submit");

          userEvent.type(inputTitle, "How to make eggs");
          userEvent.type(inputAuthor, "Pulin");
          userEvent.type(inputSource, "AUT");
          userEvent.type(inputPY, "Your Dad");
          userEvent.type(inputDOI, "UWU");
          userEvent.selectOptions(inputclaim, ['Code Quality Improvement']);
          userEvent.selectOptions(inputEL, ['weak support']);
          userEvent.click(submitButton);
});

test("should allow the user to submit their article <submit-form>,  must fail", () =>{
          const { getByLabelText , getAllByTestId, getByText} = render(<SubmitForm />);
          const inputTitle = screen.getByLabelText("Title");
          const inputAuthor = screen.getByLabelText("Author/s");
          const inputSource = screen.getByLabelText("Source");
          const inputPY = screen.getAllByLabelText("Publish Year");
          const inputDOI = screen.getByLabelText("DOI");
          const inputclaim = screen.getByTestId('Claim');
          const inputEL = screen.getByTestId('Evidence Level');
          const submitButton = screen.getByTestId("Submit");

          userEvent.type(inputTitle, "How to make eggs");
          userEvent.type(inputAuthor, "Pulin");
          userEvent.type(inputSource, "AUT");
          userEvent.type(inputPY, "Your Dad");
          userEvent.type(inputDOI, "UWU");
          userEvent.selectOptions(inputclaim, ['Code Quality Improvement']);
          userEvent.selectOptions(inputEL, ['weak support']);
          userEvent.click(submitButton);
});