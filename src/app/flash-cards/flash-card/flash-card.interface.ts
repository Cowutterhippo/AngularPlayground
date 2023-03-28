export interface FlashCard {
  'id': number;
  'title': string;
  'front': string;
  'back': string;
  'category': string;
  'tags': string[];
  'created': string;
  'modified': string;
  'owner': string;
  'public': boolean;
  'question': string;
  'answer': string;
}
