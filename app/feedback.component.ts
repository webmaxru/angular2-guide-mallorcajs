import {Component} from '@angular/core';

@Component({
    selector: 'feedback',
    templateUrl: 'app/feedback.component.html'
})
export class FeedbackComponent {

    feedbackObject: Object = {
        email: 'salnikov@gmail.com'
    };

    onSubmitTemplateDrivenForm(value: any) {
        console.log('Template-driven form submitted:');
        console.log(value);
    }

}
