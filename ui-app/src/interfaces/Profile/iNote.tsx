export interface INote
{
    date: Date | string;
    subject: string;
    text: string;
    private: boolean;
    archived: boolean;
}